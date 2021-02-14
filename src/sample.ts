const greet = (person: string) => {
    return `Guten Tag, ${person} !`;
}

function main() {
    const user = 'Grant';
    Logger.log(greet(user));
}
