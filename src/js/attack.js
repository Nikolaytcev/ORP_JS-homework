export function attackVariants({ special }) {
    let attacks = [];
    for (let s of special) {
        if ("description" in s) {
            attacks.push(s);
        }
        else {
            s["description"] = "Описание недоступно";
            attacks.push(s)
        }
    };
    return attacks
}