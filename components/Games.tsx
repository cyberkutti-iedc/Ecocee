import React, { useState, useEffect, useRef } from "react";

// --- Game Selector ---
const GAME_LIST = [
  { key: "snake", name: "🐍 Snake" },
  { key: "dino", name: "🦖 Dino Run" },
  { key: "car", name: "🏎️ Car Race" }
];

function GameSelector({ selected, setSelected }: { selected: string; setSelected: (k: string) => void }) {
  return (
    <div className="flex justify-center gap-4 mb-6">
      {GAME_LIST.map(g => (
        <button
          key={g.key}
          className={`px-4 py-2 rounded-xl font-semibold shadow transition
            ${selected === g.key
              ? "bg-green-600 text-white scale-105"
              : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-green-100 dark:hover:bg-green-900"}
          `}
          onClick={() => setSelected(g.key)}
        >
          {g.name}
        </button>
      ))}
    </div>
  );
}

// --- Snake Game ---
function SnakeGame() {
  const boardSize = 20;
  const [snake, setSnake] = useState([[10, 10]]);
  const [food, setFood] = useState([Math.floor(Math.random() * boardSize), Math.floor(Math.random() * boardSize)]);
  const [direction, setDirection] = useState<[number, number]>([0, 1]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState<number>(() => Number(localStorage.getItem("snakeHighScore") || 0));
  const [gameOver, setGameOver] = useState(false);
  const moveRef = useRef(direction);
  moveRef.current = direction;

  // Handle keyboard
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (gameOver) return;
      if (e.key === "ArrowUp" && moveRef.current[0] !== 1) setDirection([-1, 0]);
      else if (e.key === "ArrowDown" && moveRef.current[0] !== -1) setDirection([1, 0]);
      else if (e.key === "ArrowLeft" && moveRef.current[1] !== 1) setDirection([0, -1]);
      else if (e.key === "ArrowRight" && moveRef.current[1] !== -1) setDirection([0, 1]);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [gameOver]);

  // Game loop (slower)
  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      setSnake(prev => {
        const head = prev[0];
        const newHead: [number, number] = [head[0] + moveRef.current[0], head[1] + moveRef.current[1]];
        // Check wall or self collision
        if (
          newHead[0] < 0 || newHead[0] >= boardSize ||
          newHead[1] < 0 || newHead[1] >= boardSize ||
          prev.some(([x, y]) => x === newHead[0] && y === newHead[1])
        ) {
          setGameOver(true);
          // Save high score
          if (score > highScore) {
            setHighScore(score);
            localStorage.setItem("snakeHighScore", String(score));
          }
          return prev;
        }
        let newSnake;
        if (newHead[0] === food[0] && newHead[1] === food[1]) {
          setScore(s => s + 1);
          // Place food not on snake
          let newFood: [number, number];
          do {
            newFood = [
              Math.floor(Math.random() * boardSize),
              Math.floor(Math.random() * boardSize)
            ];
          } while (prev.some(([x, y]) => x === newFood[0] && y === newFood[1]));
          setFood(newFood);
          newSnake = [newHead, ...prev];
        } else {
          newSnake = [newHead, ...prev.slice(0, -1)];
        }
        return newSnake;
      });
    }, 180); // slower speed
    return () => clearInterval(interval);
  }, [food, gameOver, score, highScore]);

  const reset = () => {
    setSnake([[10, 10]]);
    setFood([Math.floor(Math.random() * boardSize), Math.floor(Math.random() * boardSize)]);
    setDirection([0, 1]);
    setScore(0);
    setGameOver(false);
  };

  return (
    <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 shadow-2xl border-2 border-green-300 dark:border-green-900 max-w-xl mx-auto">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-xl tracking-wide">🐍 Snake Game</h3>
        <div>
          <span className="font-semibold text-green-700 dark:text-green-200 mr-4">Score: {score}</span>
          <span className="font-semibold text-yellow-700 dark:text-yellow-200">High: {highScore}</span>
        </div>
      </div>
      <div className="relative mx-auto" style={{ width: 400, height: 400 }}>
        <div
          className="grid"
          style={{
            gridTemplateRows: `repeat(${boardSize}, 1fr)`,
            gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
            width: 400,
            height: 400,
            background: "linear-gradient(135deg,#bbf7d0 60%,#f0fdf4 100%)",
            borderRadius: 24,
            border: "4px solid #22c55e",
            boxShadow: "0 8px 32px #22c55e22",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {[...Array(boardSize * boardSize)].map((_, idx) => {
            const x = Math.floor(idx / boardSize);
            const y = idx % boardSize;
            const isHead = snake[0][0] === x && snake[0][1] === y;
            const isBody = snake.some(([sx, sy], i) => i !== 0 && sx === x && sy === y);
            const isFood = food[0] === x && food[1] === y;
            return (
              <div
                key={idx}
                className={`w-full h-full border border-green-200 dark:border-green-900
                  ${isHead ? "bg-green-700 shadow-lg scale-110" : isBody ? "bg-green-400" : isFood ? "bg-yellow-400 animate-pulse" : "bg-transparent"}
                  rounded-full flex items-center justify-center transition-all duration-75
                `}
              >
                {isHead ? <span className="text-white text-lg">🟢</span> : isFood ? <span className="text-yellow-600 text-lg">🍎</span> : ""}
              </div>
            );
          })}
        </div>
        {/* Stylish border walls */}
        <div className="absolute inset-0 pointer-events-none border-4 border-green-700 rounded-2xl" style={{boxShadow: "0 0 0 6px #bbf7d0"}} />
        {gameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 rounded-2xl">
            <div className="text-white text-2xl font-bold mb-2">Game Over</div>
            <button
              onClick={reset}
              className="px-5 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700"
            >
              Restart
            </button>
          </div>
        )}
      </div>
      <div className="mt-2 text-xs text-slate-500 text-center">Use arrow keys to play</div>
    </div>
  );
}

// --- Dino Run Game ---
function DinoRun() {
  const [dinoY, setDinoY] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [obstacles, setObstacles] = useState<number[]>([700]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState<number>(() => Number(localStorage.getItem("dinoHighScore") || 0));
  const [gameOver, setGameOver] = useState(false);
  const jumpRef = useRef(isJumping);
  jumpRef.current = isJumping;

  // Jump physics constants
  const JUMP_HEIGHT = 90;
  const JUMP_STEP = 10;
  const JUMP_INTERVAL = 100; // ms, smaller is faster animation

  // Handle jump
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (gameOver) return;
      if ((e.key === " " || e.key === "ArrowUp") && !jumpRef.current) {
        setIsJumping(true);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [gameOver]);

  // Dino jump logic (optimized, smoother, more natural)
  useEffect(() => {
    if (!isJumping) return;
    let y = 0;
    let velocity = 0;
    let gravity = -1.2;
    let jumpPower = 16;
    let jumping = true;
    const jumpInterval = setInterval(() => {
      if (jumping) {
        velocity = jumpPower;
        jumping = false;
      }
      y += velocity;
      velocity += gravity;
      if (y <= 0) {
        y = 0;
        setDinoY(0);
        setIsJumping(false);
        clearInterval(jumpInterval);
      } else if (y > JUMP_HEIGHT) {
        y = JUMP_HEIGHT;
        velocity = -velocity * 0.5; // bounce effect at peak
      }
      setDinoY(y);
    }, JUMP_INTERVAL);
    return () => clearInterval(jumpInterval);
  }, [isJumping]);

  // Obstacles and collision
  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      setObstacles(prev =>
        prev
          .map(x => x - 4) // slower speed
          .filter(x => x > -40)
          .concat(Math.random() < 0.018 && prev.length < 2 ? [700] : [])
      );
      setScore(s => s + 1);
    }, 36);
    return () => clearInterval(interval);
  }, [gameOver]);

  // Collision detection
  useEffect(() => {
    for (let obs of obstacles) {
      if (
        obs < 100 &&
        obs > 40 &&
        dinoY < 40
      ) {
        setGameOver(true);
        // Save high score
        if (score > highScore) {
          setHighScore(score);
          localStorage.setItem("dinoHighScore", String(score));
        }
      }
    }
  }, [obstacles, dinoY, score, highScore]);

  const reset = () => {
    setDinoY(0);
    setIsJumping(false);
    setObstacles([700]);
    setScore(0);
    setGameOver(false);
  };

  // Astro cartoon/ecocee mascot SVG
  function EcoceeMascot() {
    return (
      <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
        <ellipse cx="30" cy="55" rx="22" ry="20" fill="#a7f3d0" />
        <ellipse cx="30" cy="38" rx="18" ry="18" fill="#38bdf8" />
        <ellipse cx="30" cy="38" rx="13" ry="13" fill="#fff" />
        <ellipse cx="24" cy="36" rx="2.5" ry="3.5" fill="#0ea5e9" />
        <ellipse cx="36" cy="36" rx="2.5" ry="3.5" fill="#0ea5e9" />
        <ellipse cx="30" cy="44" rx="5" ry="2" fill="#a7f3d0" />
        <rect x="18" y="60" width="6" height="14" rx="3" fill="#38bdf8" />
        <rect x="36" y="60" width="6" height="14" rx="3" fill="#38bdf8" />
      </svg>
    );
  }

  return (
    <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900 dark:to-yellow-800 shadow-2xl border-2 border-yellow-300 dark:border-yellow-900 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-xl tracking-wide">🌟 Ecocee Run</h3>
        <div>
          <span className="font-semibold text-yellow-700 dark:text-yellow-200 mr-4">Score: {score}</span>
          <span className="font-semibold text-green-700 dark:text-green-200">High: {highScore}</span>
        </div>
      </div>
      <div className="relative mx-auto" style={{ width: 700, height: 180, background: "#fef9c3", borderRadius: 24, border: "4px solid #fde68a" }}>
        {/* Ecocee Mascot */}
        <div
          style={{
            position: "absolute",
            left: 60,
            bottom: 20 + dinoY,
            width: 60,
            height: 80,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            zIndex: 2
          }}
        >
          <EcoceeMascot />
        </div>
        {/* Obstacles */}
        {obstacles.map((x, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              bottom: 20,
              width: 28,
              height: 60,
              background: "#f59e42",
              borderRadius: 8,
              border: "3px solid #b45309"
            }}
          />
        ))}
        {/* Ground */}
        <div style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          height: 20,
          background: "#a3e635",
          borderRadius: "0 0 24px 24px"
        }} />
        {gameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 rounded-2xl">
            <div className="text-white text-2xl font-bold mb-2">Game Over</div>
            <button
              onClick={reset}
              className="px-5 py-2 bg-yellow-600 text-white rounded-xl shadow hover:bg-yellow-700"
            >
              Restart
            </button>
          </div>
        )}
      </div>
      <div className="mt-2 text-xs text-slate-500 text-center">Press Space or ↑ to jump</div>
    </div>
  );
}

// --- Car Racing Game ---
function CarRacingGame() {
  const roadWidth = 320;
  const roadHeight = 400;
  const carWidth = 40;
  const carHeight = 60;
  const laneCount = 3;
  const laneWidth = roadWidth / laneCount;
  const [carLane, setCarLane] = useState(1); // 0,1,2
  const [obstacles, setObstacles] = useState<{ lane: number; y: number }[]>([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState<number>(() => Number(localStorage.getItem("carHighScore") || 0));
  const [gameOver, setGameOver] = useState(false);
  const moveRef = useRef(carLane);
  moveRef.current = carLane;

  // Handle keyboard
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (gameOver) return;
      if (e.key === "ArrowLeft" && moveRef.current > 0) setCarLane(l => l - 1);
      else if (e.key === "ArrowRight" && moveRef.current < laneCount - 1) setCarLane(l => l + 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [gameOver]);

  // Game loop
  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      setObstacles(prev => {
        // Move obstacles down
        let newObs = prev.map(o => ({ ...o, y: o.y + 8 }));
        // Remove off-screen
        newObs = newObs.filter(o => o.y < roadHeight);
        // Add new obstacle randomly
        if (Math.random() < 0.08) {
          newObs.push({ lane: Math.floor(Math.random() * laneCount), y: -carHeight });
        }
        return newObs;
      });
      setScore(s => s + 1);
    }, 60);
    return () => clearInterval(interval);
  }, [gameOver]);

  // Collision detection
  useEffect(() => {
    for (let obs of obstacles) {
      if (
        obs.lane === carLane &&
        obs.y + carHeight > roadHeight - carHeight - 10 &&
        obs.y < roadHeight - 10
      ) {
        setGameOver(true);
        if (score > highScore) {
          setHighScore(score);
          localStorage.setItem("carHighScore", String(score));
        }
      }
    }
  }, [obstacles, carLane, score, highScore]);

  const reset = () => {
    setCarLane(1);
    setObstacles([]);
    setScore(0);
    setGameOver(false);
  };

  // Car SVG
  function CarSVG({ color = "#22d3ee" }) {
    return (
      <svg width={carWidth} height={carHeight} viewBox="0 0 40 60" fill="none">
        <rect x="8" y="10" width="24" height="40" rx="8" fill={color} />
        <rect x="12" y="18" width="16" height="18" rx="4" fill="#fff" />
        <rect x="8" y="50" width="8" height="8" rx="3" fill="#222" />
        <rect x="24" y="50" width="8" height="8" rx="3" fill="#222" />
        <rect x="8" y="2" width="8" height="8" rx="3" fill="#222" />
        <rect x="24" y="2" width="8" height="8" rx="3" fill="#222" />
      </svg>
    );
  }

  return (
    <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900 dark:to-blue-900 shadow-2xl border-2 border-cyan-300 dark:border-cyan-900 max-w-xl mx-auto">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-xl tracking-wide">🏎️ Car Racing</h3>
        <div>
          <span className="font-semibold text-cyan-700 dark:text-cyan-200 mr-4">Score: {score}</span>
          <span className="font-semibold text-blue-700 dark:text-blue-200">High: {highScore}</span>
        </div>
      </div>
      <div className="relative mx-auto" style={{ width: roadWidth, height: roadHeight }}>
        {/* Road */}
        <div
          className="absolute left-0 top-0"
          style={{
            width: roadWidth,
            height: roadHeight,
            background: "linear-gradient(180deg,#e0f2fe 70%,#bae6fd 100%)",
            borderRadius: 24,
            border: "4px solid #06b6d4",
            boxShadow: "0 8px 32px #06b6d422",
            overflow: "hidden"
          }}
        >
          {/* Lane lines */}
          {[1, 2].map(lane => (
            <div
              key={lane}
              className="absolute"
              style={{
                left: lane * laneWidth - 2,
                top: 0,
                width: 4,
                height: "100%",
                background: "repeating-linear-gradient(180deg,#fff 0 16px,transparent 16px 32px)",
                opacity: 0.5
              }}
            />
          ))}
          {/* Obstacles */}
          {obstacles.map((obs, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: obs.lane * laneWidth + laneWidth / 2 - carWidth / 2,
                top: obs.y,
                width: carWidth,
                height: carHeight,
                zIndex: 2
              }}
            >
              <CarSVG color="#f87171" />
            </div>
          ))}
          {/* Player Car */}
          <div
            className="absolute"
            style={{
              left: carLane * laneWidth + laneWidth / 2 - carWidth / 2,
              top: roadHeight - carHeight - 10,
              width: carWidth,
              height: carHeight,
              zIndex: 3
            }}
          >
            <CarSVG />
          </div>
          {/* Game Over Overlay */}
          {gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 rounded-2xl z-10">
              <div className="text-white text-2xl font-bold mb-2">Game Over</div>
              <button
                onClick={reset}
                className="px-5 py-2 bg-cyan-600 text-white rounded-xl shadow hover:bg-cyan-700"
              >
                Restart
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="mt-2 text-xs text-slate-500 text-center">Use ← → arrow keys to move</div>
    </div>
  );
}

export default function Games() {
  const [selected, setSelected] = useState("snake");
  return (
    <div>
      <GameSelector selected={selected} setSelected={setSelected} />
      {selected === "snake" && <SnakeGame />}
      {selected === "dino" && <DinoRun />}
      {selected === "car" && <CarRacingGame />}
    </div>
  );
}
