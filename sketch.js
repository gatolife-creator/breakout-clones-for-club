function setup() {
    // 横幅600px, 縦幅400pxのカンバスを作成
    createCanvas(600, 400);
}

function draw() {
    // カンバスの背景を黒に設定
    background(0);

    // 四角形を白に塗りつぶす
    fill(255);
    // (0, 0)を基準にして, 縦横200pxの四角形を描画
    rect(0, 0, 200, 200);
}