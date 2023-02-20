function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);

    fill(255);
    // 四角形を5個描画
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            rect(i * 60, j * 60, 60, 60);
        }
    }
}