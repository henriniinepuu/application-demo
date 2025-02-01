interface ProjectOverviewProps {
  className?: string;
}

export default function ProjectOverview({ className }: ProjectOverviewProps) {
    return (
        <div className={className}>
            <div className="flex flex-col gap-2">
                <div>
                    <h1 className="text-2xl font-bold flex text-center">Customer name</h1>
                </div>
                <div>
                    <div className="bg-red-500 boder border-rounded-md p-2 border-black">
                        <div>This is alert message</div>
                    </div>
                </div>
                <div>
                    <div>This is a description of the Customer</div>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}