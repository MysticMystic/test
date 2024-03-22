// Define canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Load images
const playerImg = new Image();
playerImg.src = 'player.png'; // Replace 'player.png' with your Minecraft-style player image
const roomImg = new Image();
roomImg.src = 'room.png'; // Replace 'room.png' with your Minecraft-style room image

// Player object
const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    speed: 2,
    width: 32,
    height: 32,
};

// Handle player movement
function handlePlayerMovement() {
    window.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'ArrowUp':
                player.y -= player.speed;
                break;
            case 'ArrowDown':
                player.y += player.speed;
                break;
            case 'ArrowLeft':
                player.x -= player.speed;
                break;
            case 'ArrowRight':
                player.x += player.speed;
                break;
        }
    });
}

// Update game objects
function update() {
    // Update player position
    handlePlayerMovement();

    // Check collision with walls (not implemented in this example)
}

// Render game objects
function render() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw room background
    ctx.drawImage(roomImg, 0, 0, canvas.width, canvas.height);

    // Draw player
    ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);
}

// Game loop
function gameLoop() {
    update();
    render();
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();

