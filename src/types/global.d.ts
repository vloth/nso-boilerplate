import type * as chai from 'chai'
import type * as Sinon from 'ts-sinon'

declare global {
    declare const expect: typeof chai.expect
    declare const sinon: typeof Sinon
}
