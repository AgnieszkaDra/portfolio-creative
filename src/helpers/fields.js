export const fields = [
     {
        label: "Name",
        name: "username",
        type: "text",
        required: true,
        error: "Wrong name format",
        placeholder: "Name"
    },
    {
        label: "email",
        name: "email",
        type: "email",
        required: true,
        pattern: '^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$',
        error: "Wrong email format",
        placeholder: "email"
    },
    {
        label: "message",
        name: "message",
        type: "text",
        required: true,
        placeholder: "message"
    }
]