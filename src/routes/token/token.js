import userActions from '../../actions/user/user'

export default function getAllToken (ctx) {
    ctx.body = userActions.getToken()
    return ctx
}
