export interface PostType {
    id: number
    title: string
    sub_title: string
    updated_at: number | string 
    author_name: [string]
    // author_email: string 
    content: string
    status: "idle" | "pending" | "rejected" | "fulfilled"
    error: string | undefined | null
}