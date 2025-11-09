async function showDailySentence() {
  try {
    const response = await fetch('texts.txt');
    const text = await response.text();
    const lines = text.split('\n').map(line => line.trim()).filter(Boolean);

    // 根据日期生成索引（天数 % 行数）
    const today = new Date();
    const dayIndex = Math.floor(today.getTime() / (1000 * 60 * 60 * 24)) % lines.length;

    const sentence = lines[dayIndex];
    document.getElementById('sentence').textContent = sentence;
  } catch (err) {
    console.error('加载文本出错：', err);
  }
}

window.onload = showDailySentence;