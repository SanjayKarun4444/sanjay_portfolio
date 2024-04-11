import { cn } from "@/lib/utils";
export function H1(props: React.HTMLProps<HTMLHeadingElement>){
    return <h1
    {...props}
    className={cn("text-2xl font-bold tracking-tight", props.className)}
    />
}
    