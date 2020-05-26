'use strict';

//{name: タスクの文字列, state: 完了している場合はtrue,未完了の場合はfalse}
const tasks = new Array();

/**
 * TODOを追加する
 * @param {string} task
 */
function todo(task) {
    tasks.push({
        name: task,
        state: false
    });
}

/**
 * タスクと完了したかどうかが含まれるオブジェクトを受け取り、 完了したかを返す
 * @param {object} taskAndIsDonePair
 * @return {boolean} 完了している場合にtrue、未完了の場合にfalse
 */
function isDone(taskAndIsDonePair) {
    return taskAndIsDonePair.state;
}

/**
 * タスクと完了したかどうかが含まれるオブジェクトを受け取り、 完了していないかを返す
 * @param {object} taskAndIsDonePair
 * @return {boolean} 未完了の場合にtrue、完了している場合にfalse
 */
function isNotDone(taskAndIsDonePair) {
    return !isDone(taskAndIsDonePair);
}

/**
 * TODOの一覧を表示する
 * @return {array} TODO一覧
 */
function list() {
    return tasks
        .filter(task => isNotDone(task))
        .map(t => t.name);
}

module.exports = {
    todo,
    list
}
