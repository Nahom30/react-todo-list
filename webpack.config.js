module.exports = { // video part 3
	devtool: 'inline-source-map',
	entry: ['./client/client.js'], // webpack needs entry. may need mulitple entry point 
	output: {// wepack is going to go through and buil up file and where we want the file 
		path: './dist', // this is where we want the path to be 
		filename: 'bundle.js', //file name of what we're using
		publicPath: '/'
	},
	module: { //define how you want webpack to do the task

		loaders: [ // loading the file and you want to do something with it. It's an array.
		// Each type file we have an object. each object has the following:  
		{
			test: /\.js$/, // each object has test. the test is asking what file are we doing this on. 
			//using regex uisng two forward slashes (/  $/). dollar sign signaling the end of the filename 
			//if this file matches we want to perform loader:  
			loader: 'babel-loader', //what loader we want it to perform? we will be using babel-loader. 
			//compile tool that compile jsx/esx 
			exclude: /node_modules/,// we dont want it to go through certain folder we use exculde 
			query: { //to tell babel what to do for every js file when it sees jsx/es6/es5
				presets: ['react', 'es2015']

			} 
		}

		]

	}
}
