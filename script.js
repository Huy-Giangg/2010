document.addEventListener('DOMContentLoaded', () => {
    // 1. Kích hoạt hiệu ứng Confetti
    // Chọn màu sắc chủ đạo cho 20/10: Hồng, Trắng, Vàng Gold
    const colors = ['#ff99aa', '#ffffff', '#ffd700', '#e91e63']; 
    const jsConfetti = new JSConfetti();

    jsConfetti.addConfetti({
        confettiColors: colors,
        confettiRadius: 5,
        confettiNumber: 500, // Số lượng Confetti
        emojis: ['💖', '🌸', '✨', '🌹'], // Thêm Emoji liên quan
    });

    // 2. Kích hoạt thêm lần nữa sau 3 giây
    setTimeout(() => {
        jsConfetti.addConfetti({
             confettiColors: colors,
             confettiRadius: 5,
             confettiNumber: 200,
             emojis: ['❤️'],
        });
    }, 3000);
});