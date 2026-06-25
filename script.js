document.addEventListener("DOMContentLoaded", () => {
    // تأثير ضغط مرن وحيوي للأزرار لتعزيز الـ UX
    const contactButtons = document.querySelectorAll(".action-btn");
    
    contactButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.style.transform = "scale(0.97)";
            setTimeout(() => {
                button.style.transform = "translateY(-4px) scale(1)";
            }, 100);
        });
    });

    console.log("إدريس للتجهيزات المائية: تم تحميل الملفات بنجاح.");
});
