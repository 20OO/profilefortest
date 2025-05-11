function updateProfile() {
    // Lấy giá trị từ input
    const name = document.getElementById("name-input").value;
    const bio = document.getElementById("bio-input").value;
    const bgColor = document.getElementById("bg-color-input").value;
    const textColor = document.getElementById("text-color-input").value;

    // Cập nhật profile
    if (name) document.getElementById("profile-name").textContent = name;
    if (bio) document.getElementById("profile-bio").textContent = bio;
    document.body.style.backgroundColor = bgColor || "#f0f0f0";
    document.querySelector(".container").style.color = textColor || "#333";
}
