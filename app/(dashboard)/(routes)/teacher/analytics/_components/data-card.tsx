import { Card,CardContent,CardHeader, CardTitle, } from "@/components/ui/card";
import { ShoppingBag } from "lucide-react";

interface DataCardProps{
    value: number;
    label: string;
    shouldFormat?: boolean;
}

export const DataCard = ({
    value,
    label,
    shouldFormat
}: DataCardProps) => {
    return(
        <Card>
            <CardHeader className="flex flex-col items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    {label}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between text-2xl font-bold">
                    ${value}
                <ShoppingBag color="green" />
                </div>
            </CardContent>
        </Card>
    )
}