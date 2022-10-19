
export default function (rootActionName: string) {
    return function (name: string) {
        return `${rootActionName}/${name}`
    }
}