import React, { useState } from "react"
import { useSelector } from "react-redux"

import {
    useGetBedsQuery,
    useGetAvailableBedsQuery,
    useAssignBedMutation,
    useReleaseBedMutation,
    useDeleteBedMutation,
    useBulkAssignBedsMutation,
} from "@/features/rooms/api/bedApi"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

import { Loader2, Upload } from "lucide-react"
import { useModal } from "@/context/ModalContext"

export default function BedManagement() {
    const selectedHostelId = useSelector(
        (state) => state.allocation.hostelId
    )

    const [localFilters, setFilters] = useState({})
    const [file, setFile] = useState(null)

    const filters = {
        hostelId: selectedHostelId,
        ...localFilters,
    }

    const { data, isLoading } = useGetBedsQuery(filters, {
        skip: !selectedHostelId,
    })

    const { data: availableBeds } = useGetAvailableBedsQuery(
        { hostelId: selectedHostelId },
        { skip: !selectedHostelId }
    )

    const [assignBed] = useAssignBedMutation()
    const [releaseBed] = useReleaseBedMutation()
    const [deleteBed] = useDeleteBedMutation()
    const [bulkAssignBeds, bulkState] = useBulkAssignBedsMutation()

    const { openModal } = useModal()

    const beds = data || []

    const handleImport = async () => {
        if (!file) return
        await bulkAssignBeds(file)
    }

    if (isLoading) {
        return <Loader2 className="animate-spin mx-auto mt-10" />
    }

    return (
        <div className="space-y-6">

            {/* HEADER */}
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Beds Management</h2>

                <Button onClick={() => openModal("bed")}>
                    Add Bed
                </Button>
            </div>

            {/* FILTERS */}
            <Card>
                <CardContent className="p-4 grid md:grid-cols-3 gap-4">

                    <Input
                        placeholder="Room Number"
                        onChange={(e) =>
                            setFilters((p) => ({
                                ...p,
                                roomNumber: e.target.value,
                            }))
                        }
                    />

                    <Select
                        onValueChange={(v) =>
                            setFilters((p) => ({
                                ...p,
                                bedStatus: v,
                            }))
                        }
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Bed Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="available">Available</SelectItem>
                            <SelectItem value="occupied">Occupied</SelectItem>

                            <SelectItem value="out_of_service">Out Of Service</SelectItem>

                            <SelectItem value="reserved">Reserved</SelectItem>
                        </SelectContent>
                    </Select>

                    <div className="flex gap-2">
                        <Input type="file" onChange={(e) => setFile(e.target.files[0])} />
                        <Button onClick={handleImport} disabled={bulkState.isLoading}>
                            {bulkState.isLoading && <Loader2 className="animate-spin mr-2" />}
                            <Upload className="w-4 h-4" />
                        </Button>
                    </div>

                </CardContent>
            </Card>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

                {beds.map((bed) => {
                    const isAvailable = !bed.student_id

                    return (
                        <Card key={bed.id} className="hover:shadow-lg transition">

                            <CardHeader className="flex justify-between items-center">
                                <CardTitle>Bed {bed.bed_number}</CardTitle>
                                <Badge variant={isAvailable ? "default" : "destructive"}>
                                    {isAvailable ? "Available" : "Occupied"}
                                </Badge>
                            </CardHeader>

                            <CardContent className="space-y-2 text-sm">

                                <p>Room: {bed.room_number}</p>
                                <p>₹{bed.monthly_price}</p>

                                <Badge variant="outline">{bed.bed_status}</Badge>

                                <div className="flex gap-2 pt-2">

                                    {isAvailable ? (
                                        <Button
                                            size="sm"
                                            onClick={() =>
                                                assignBed({ bedId: bed.id, studentId: 1 })
                                            }
                                        >
                                            Assign
                                        </Button>
                                    ) : (
                                        <Button
                                            size="sm"
                                            variant="secondary"
                                            onClick={() => releaseBed(bed.id)}
                                        >
                                            Release
                                        </Button>
                                    )}

                                    {/* ✅ EDIT */}
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={() => openModal("bed", bed)}
                                    >
                                        Edit
                                    </Button>

                                    <Button
                                        size="sm"
                                        variant="destructive"
                                        onClick={() => deleteBed(bed.id)}
                                    >
                                        Delete
                                    </Button>

                                </div>

                            </CardContent>
                        </Card>
                    )
                })}

            </div>

            {/* FOOTER */}
            <Card>
                <CardContent className="p-4 text-sm text-muted-foreground">
                    Available Beds: {availableBeds?.length || 0}
                </CardContent>
            </Card>

        </div>
    )
}