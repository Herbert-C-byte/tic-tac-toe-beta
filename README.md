# Tic Tac Toe Game

A modern, accessible two-player Tic Tac Toe game with persistent score tracking and smooth animations.

## Features

- **Dark/Light Theme Toggle**: Quick theme switcher in the top-right corner with preference saved
- **Accessible Design**: Full keyboard navigation (arrow keys), ARIA labels, and screen reader support
- **Persistent Scoring**: Scores are automatically saved to browser localStorage and restored on page reload
- **Smooth Animations**: Animated mark placement and win celebration effects
- **Responsive UI**: Adapts beautifully to mobile, tablet, and desktop screens
- **Visual Feedback**: Clear focus indicators, hover states, and winning line highlights
- **Color-Coded Players**: X (blue) and O (orange) for visual distinction

## How to Play

1. **Open the game**: Simply open `index.html` in your web browser
2. **Toggle theme**: Click the moon/sun icon in the top-right to switch between light and dark modes
3. **Take turns**: Click on any empty cell to place your mark (X starts first)
4. **Win or Draw**: Get three in a row (horizontally, vertically, or diagonally) to win
5. **Restart**: Click "Restart Game" to play again with scores intact
6. **Reset**: Click "Reset Scores" to clear all score history

## Keyboard Controls

- **Arrow Keys**: Navigate between cells
- **Enter/Space**: Place mark in the selected cell
- **Tab**: Move focus to next interactive element

## Technologies Used

- **HTML5**: Semantic markup with ARIA attributes
- **CSS3**: Modern layout with flexbox/grid, animations, and gradients
- **Vanilla JavaScript**: Game logic, keyboard handlers, and localStorage persistence
- **No dependencies**: Pure frontend, no build tools required

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Any modern browser with ES6 JavaScript support

## Testing Checklist

### Functionality

- [ ] X and O players can take turns alternately
- [ ] Only empty cells can be clicked
- [ ] Game detects all 8 win conditions (3 rows, 3 columns, 2 diagonals)
- [ ] Winning marks are highlighted with yellow background and glow
- [ ] Draw condition is detected when all cells are filled
- [ ] Scores increment correctly for each win and draw
- [ ] Restarting a game clears the board but keeps scores
- [ ] Clicking "Reset Scores" clears all stats and restarts the game

### Persistence

- [ ] Scores persist after page refresh
- [ ] Scores persist after browser restart
- [ ] Clear browser data resets scores properly

### Accessibility

- [ ] Tab key navigates through cells
- [ ] Arrow keys move focus between cells (wraps around edges)
- [ ] Enter or Space plays the selected cell
- [ ] All cells and buttons have visible focus outlines
- [ ] Screen reader announces whose turn it is
- [ ] Screen reader announces win/draw conditions
- [ ] All interactive elements are keyboard accessible

### Responsiveness

- [ ] Layout adapts to mobile screen (< 600px width)
- [ ] Cells remain clickable on all screen sizes
- [ ] Text remains readable on small screens
- [ ] No horizontal scrolling on mobile

### Visual Polish

- [ ] Mark placement animates smoothly (scale-up effect)
- [ ] X marks appear in blue
- [ ] O marks appear in orange
- [ ] Winning marks glow and pulse slightly
- [ ] Buttons have hover effects
- [ ] Focus indicators are clear and visible

## File Structure

```
.
├── index.html      # Game markup with semantic structure
├── script.js       # Game logic, event handlers, and localStorage
├── styles.css      # Layout, animations, and responsive design
└── README.md       # This file
```

## Future Enhancements

- Single-player mode with AI opponent (difficulty levels)
- Move history/undo functionality
- Sound effects and haptic feedback
- Dark/light theme toggle
- Multiplayer over WebSocket
- Game statistics dashboard

## License

This project is open source and available under the MIT License.
