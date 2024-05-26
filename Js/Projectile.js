class Projectile {
    constructor(calculator) {
        this.calculator = calculator;
        this.g = 9.81; // acceleration due to gravity (m/s^2)
    }

    setupProjectile(a, h, u) {
        // Convert angle from degrees to radians
        var angleRad = a * Math.PI / 180;
        var initialHeight = (h * Math.sin(angleRad))-(0.05* Math.sin(angleRad)); // Compute initial height based on angle

        // Define projectile motion equations for the trajectory
        this.calculator.setExpressions([
            // {
            //     id: 'y-projectile',
            //     latex: `y=${initialHeight}+${u}\\sin(${angleRad})t-\\frac{1}{2}${this.g}t^2`,
            //     color: '#FF0000'
            // },
            // {
            //     id: 'x-projectile',
            //     latex: `x=${u}\\cos(${angleRad})t`,
            //     color: '#0000FF'
            // },
            {
                id: 'y-gt0',
                latex: `((${u}\\cos(${angleRad})t), ${initialHeight}+${u}\\sin(${angleRad})t-\\frac{1}{2}${this.g}t^2) \\{${initialHeight}+${u}\\sin(${angleRad})t-\\frac{1}{2}${this.g}t^2 > 0\\}`,
                color: '#00FF00'
            }
        ]);
    }
}
