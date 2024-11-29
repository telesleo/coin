const MIN_DIFFICULTY = 0;
const MAX_DIFFICULTY = 64;

export default function getTargetHash(difficulty: number) {
  const difficultyClamped = Math.max(
    MIN_DIFFICULTY,
    Math.min(MAX_DIFFICULTY, difficulty),
  );
  return [
    ...new Array(difficultyClamped).fill(0),
    ...new Array(MAX_DIFFICULTY - difficultyClamped).fill("f"),
  ].join("");
}
