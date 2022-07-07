const mongoose = require('mongoose')

// 排名测试OK
const pmtrySchema = new mongoose.Schema({
    time: String,
    url: String,
    pmword: String,
    pmnum: Number,
    urlnum: String,
    ontheFirstPage: Number,
    urltoday: String,
    pmwordtoday: String
})

const Pmtry = mongoose.model('pmtry',pmtrySchema)

// 进程
const nodesSchema = new mongoose.Schema({
    node_name: String,
    ip: String,
    done_time: String,
    num: String,
    work: Number,
    start_time: String,
    end_time: String,
    time: String,
    id: String
})

const Nodes = mongoose.model('nodes',nodesSchema)

module.exports = {
    Pmtry,Nodes
}