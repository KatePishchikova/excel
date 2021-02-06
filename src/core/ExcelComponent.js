import { DomListener } from '@core/DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.unsubckribers = []

    // Настраиваем наш компонент до init
    this.prepare()
  }

  prepare() {}

  // Возвращает шаблон компонента
  toHTML() {
    return ''
  }

  // Инициализируем компонент
  // Добавляем ДОМ сушателей
  init() {
    this.initDOMListeners()
  }

  // Уведомляем слушателя о событии event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  // Подписываемся на событие event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubckribers.push(unsub)
  }

  // Удаляем компонент
  // Чистим ДОМ сушателей
  destroy() {
    this.removeDOMListeners()
    this.unsubckribers.forEach(unsub => unsub())
  }
}
