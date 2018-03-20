function sayHello(){
    return "Hello im a human?";
}

async function main(){
    const hello = await sayHello();
    console.log(hello);
}

main().catch(console.error);