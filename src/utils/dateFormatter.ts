export function dateFormatter(date: Date) {
    return new Intl.DateTimeFormat('en-GB', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }).format(new Date(date))
}