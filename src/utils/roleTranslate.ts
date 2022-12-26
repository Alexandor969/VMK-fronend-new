export default function roleTranslate(role: string): string {
    switch(role) {
        case "ADMIN":
        return "Администратор"
        case "MANAGER":
        return "Менеджер"
        default:
        return "Пользователь"
    }
}