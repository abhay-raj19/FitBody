var cursorFollower = document.getElementById("cursor-follower");
var cursor = { x: 0, y: 0 };
var follower = { x: 0, y: 0, vx: 0, vy: 0 };

const stiffness = 0.1; // Spring stiffness
const damping = 0.05; // Damping coefficient

document.addEventListener("mousemove", function (e) {
    cursor.x = e.clientX;
    cursor.y = e.clientY;
    var cursor_el = document.getElementById("cursor");
    cursor_el.style.left = e.clientX + "px";
    cursor_el.style.top = e.clientY + "px";

    if (e.target.dataset.cursor == "link") {
        cursorFollower.classList.add("link-cursor-follower");
        cursorFollower.classList.remove("default-cursor-follower");

        cursor_el.classList.add("link-cursor");
        cursor_el.classList.remove("default-cursor");
        cursor_el.innerHTML = `<i class="fa fa-${e.target.dataset.cursoricon}"></i>`;
    } else {
        cursorFollower.classList.add("default-cursor-follower");
        cursorFollower.classList.remove("link-cursor-follower");

        cursor_el.classList.add("default-cursor");
        cursor_el.classList.remove("link-cursor");
        cursor_el.innerHTML = "";
    }
});

document.addEventListener("DOMContentLoaded", function (event) {

    function animate() {
        // Calculate spring force
        let dx = cursor.x - follower.x;
        let dy = cursor.y - follower.y;
        let springForceX = dx * stiffness;
        let springForceY = dy * stiffness;

        // Damping
        follower.vx *= damping;
        follower.vy *= damping;

        // Apply forces to velocity
        follower.vx += springForceX;
        follower.vy += springForceY;

        // Update position
        follower.x += follower.vx;
        follower.y += follower.vy;

        // Apply position to the DOM element
        cursorFollower.style.left = follower.x + "px";
        cursorFollower.style.top = follower.y + "px";

        requestAnimationFrame(animate);
    }
    animate();
});
