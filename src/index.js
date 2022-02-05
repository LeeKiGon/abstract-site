class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(board) {
        if (this.boards.map(board => board.name).includes(board.name)) {
            throw error
        }else{
            board.isInSite = true;
            this.boards.push(board);
        }
    }

    findBoardByName(boardname) {
        return this.boards.find(board => board.name === boardname);
    }
}

class Board {
    constructor(name) {
        if(name === '' || name === null){
            throw error
        }
        this.name = name;
        this.articles = [];
        this.isInSite = false;
    }    

    publish(article) {
        if(this.isInSite){
            article.id = `${this.name}-${Math.random()}`
            article.createdDate = new Date().toISOString();
            article.isInSite = true;
            this.articles.push(article);
        }
        else throw error
    }
    getAllArticles(){
    return this.articles;
    }
}

class Article {
    constructor(article) {
        if(!article.subject || !article.content || !article.author){
            throw error
        }
        this.isInSite = false;
        this.comments = [];
    }   

    reply(comment){
        if(this.isInSite){
            comment.createdDate = new Date().toISOString();
            this.comments.push(comment);
        }
        else throw error
    }
    getAllComments(){
        return this.comments;
        }
}

class Comment {
    constructor(comment) {
        if(!comment.content || !comment.author){
            throw error
        }
        this.comments = [];
    }
}


module.exports = {
    Site,
    Board,
    Article,
    Comment,
};