import test from './cdn_script'

async function loadScripts() {
    console.log(1234);
    await test().then(() => {
        console.log("[Notice] All CDNs are imported.");
    })
}

loadScripts();