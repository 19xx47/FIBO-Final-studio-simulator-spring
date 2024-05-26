class Target {
    constructor(calculator) {
        this.calculator = calculator;
    }

    addPoint(x, y, size, color) {
        this.calculator.setExpression({
            id: `point-${x}-${y}`,
            latex: `(${x}, ${y})`,
            pointStyle: 'POINT',
            color: color,
            size: size
        });
    }

    drawTriangle(x, y, side) {
        const radians = Math.PI / 180;
        const vertices = [
            { angle: 0 * radians },       // 0 degrees
            { angle: 120 * radians },     // 120 degrees
            { angle: 240 * radians }      // 240 degrees
        ].map(v => {
            return {
                x: x + side * Math.cos(v.angle),
                y: y + side * Math.sin(v.angle)
            };
        });

        // Connect vertices to form a triangle
        vertices.push(vertices[0]); // to loop back to the first vertex

        const latex = vertices.map((v, i, arr) => {
            const next = arr[(i + 1) % arr.length];
            return `(${v.x}, ${v.y}) -- (${next.x}, ${next.y})`;
        }).join(' \\quad ');

        this.calculator.setExpression({
            id: `triangle-${x}-${y}`,
            latex: latex,
            color: '#0000FF' // Blue color for the triangle
        });
    }

    drawTargetsAndTriangles(z_target) {
        const points = [
            { x: 2, y: z_target}
            // { x: 2, y: 0.880 },
            // { x: 2, y: 0.915 },
            // { x: 2, y: 1.015 }
        ];
        points.forEach(point => {
            // this.addPoint(point.x, point.y_tar, 12, '#333');
            this.addPoint(point.x, point.y, 20, '#FF0000'); // Large size, Red color
            this.drawTriangle(point.x, point.y, 1); // Triangle with side 2 around each point
        });
    }
}
