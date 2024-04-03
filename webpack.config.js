const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    entry: {
        main: './script-main',
        signup: './script-signup',
        rulesLM: "./script-rules-lm",
        questionsDM: "./script-game-questions",
        guessRightDM: "./script-your-guess-right",
        guessFalseDM: "./script-your-guess-false",
        resultPage: "./script-result",
        mainLM: "./script-main-lm",
        rulesDM: "./script-rules-dm",
        signupLM: "./script-signup-light-mode",
        questionsLM: "./script-game-questions-light-mode",
        guessRightLM: "./script-your-guess-right-lm",
        guessFalseLM: "./script-your-guess-false-lm"
        },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './index.html'),
        inject: true,
        chunks: ['main'],
        filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './dark-mode-signup.html'),
        inject: true,
        chunks: ['signup'],
        filename: 'dark-mode-signup.html'
        }),
        new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './light-mode-rules.html'),
        inject: true,
        chunks: ['rulesLM'],
        filename: 'light-mode-rules.html',
        }),
        new HtmlWebpackPlugin({    
        template: path.resolve(__dirname, './dark-mode-questions.html'),
        inject: true,
        chunks: ['questionsDM'],
        filename: 'dark-mode-questions.html',
        }),
        new HtmlWebpackPlugin({    
        template: path.resolve(__dirname, './dark-mode-right.html'),
        inject: true,
        chunks: ['guessRightDM'],
        filename: 'dark-mode-right.html',
        }),
        new HtmlWebpackPlugin({    
        template: path.resolve(__dirname, './dark-mode-false.html'),
        inject: true,
        chunks: ['guessFalseDM'],
        filename: 'dark-mode-false.html',
        }),
        new HtmlWebpackPlugin({    
        template: path.resolve(__dirname, './dark-mode-result.html'),
        inject: true,
        chunks: ['resultPage'],
        filename: 'dark-mode-result.html',
        }),
        new HtmlWebpackPlugin({    
        template: path.resolve(__dirname, './light-mode-main.html'),
        inject: true,
        chunks: ['mainLM'],
        filename: 'light-mode-main.html',
        }),
        new HtmlWebpackPlugin({    
        template: path.resolve(__dirname, './dark-mode-rules.html'),
        inject: true,
        chunks: ['rulesDM'],
        filename: 'dark-mode-rules.html',
        }),
        new HtmlWebpackPlugin({    
        template: path.resolve(__dirname, './light-mode-signup.html'),
        inject: true,
        chunks: ['signupLM'],
        filename: 'light-mode-signup.html',
        }),
        new HtmlWebpackPlugin({    
        template: path.resolve(__dirname, './light-mode-questions.html'),
        inject: true,
        chunks: ['questionsLM'],
        filename: 'light-mode-questions.html',
        }),
        new HtmlWebpackPlugin({    
        template: path.resolve(__dirname, './light-mode-right.html'),
        inject: true,
        chunks: ['guessRightLM'],
        filename: 'light-mode-right.html',
        }),
        new HtmlWebpackPlugin({    
        template: path.resolve(__dirname, './light-mode-false.html'),
        inject: true,
        chunks: ['guessFalseLM'],
        filename: 'light-mode-false.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
],
module: {
    rules: [
    {
        test: /\.html$/i,
        loader: "html-loader"
    },
    {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
    },
    {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'assets/[name][ext]'
        }
    },
    {
        test: /\.ttf$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      }
    ]
}
}
