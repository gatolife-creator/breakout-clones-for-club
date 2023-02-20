function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);

    fill(255);
    // 四角形を5個描画
    for (let i = 0; i < 5; i++) {
        rect(i * 60, 200, 60, 60);
    }
}