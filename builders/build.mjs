import fs from "fs";
import imagemin from "imagemin";
import optipng from "imagemin-optipng";

// Input and output directories
const inputDir = "public/images";
const outputDir = "build/images";

// Function to optimize PNG images
async function optimizeImages() {
	try {
		// Ensure the output directory exists
		if (!fs.existsSync(outputDir)) {
			fs.mkdirSync(outputDir);
		}

		// Optimize PNG images
		await imagemin([`${inputDir}/*.png`], {
			destination: outputDir,
			plugins: [optipng()],
		});

		console.log("PNG images optimized!");
	} catch (error) {
		console.error("Error optimizing PNG images:", error);
	}
}

// Run the image optimization function
optimizeImages();
