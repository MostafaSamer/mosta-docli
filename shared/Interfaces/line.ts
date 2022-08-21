import { ICommand } from './command'

export interface ILine {
    name: String,
    description: String,
    categories: Array<String>,
    namespace: String,
    commands: Array<ICommand>
}