// // вот вам функция для сохранения объектов в память браузера
// // (данные в этом хранилище сохраняться даже при перезагрузке компа):
export function saveState(key, obj) {
        const stateAsString = JSON.stringify(obj);
        localStorage.setItem(key, stateAsString)
}

//
// // и вот вам функция для получения сохранённого объекта в памяти браузера:
export function restoreState(key, defaultState) {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) defaultState = JSON.parse(stateAsString);

    return defaultState;
}

//
// // ---------------------------------------------------------------------------------------------------------------
// // использование:
// // type StateType = {
// //     x: string
// //     y: number
// // }
//
// // сохраняем объект типа StateType в ячейке "test"
// saveState("test", {x: "A", y: 1});
//
// // получем в переменную state объект из ячейки "test" или дэфолтный объект если ячейка пуста
// const state = restoreState("test", {x: "", y: 0});
