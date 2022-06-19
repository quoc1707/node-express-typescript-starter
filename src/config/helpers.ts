import Hash from '../helpers/hash'
import { IHelpers } from '../interfaces/helpers'
import JwtHelper from '../helpers/jwtHelpers'

const helpers: IHelpers = {
    jwt: new JwtHelper(),
    hash: new Hash(),
}

export default helpers
