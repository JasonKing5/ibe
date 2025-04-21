import jwt from 'jsonwebtoken'

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET

function filterJwtPayload(user) {
  // 过滤掉 exp/iat/nbf 等 jwt 保留字段，避免 sign 冲突
  const { exp, iat, nbf, ...rest } = user || {}
  return rest
}

export const generateAccessToken = (user) => {
  return jwt.sign(filterJwtPayload(user), ACCESS_TOKEN_SECRET, { expiresIn: '1m' })
}

export const generateRefreshToken = (user) => {
  return jwt.sign(filterJwtPayload(user), REFRESH_TOKEN_SECRET, { expiresIn: '7d' })
}

export const verifyAccessToken = (token) => {
  return jwt.verify(token, ACCESS_TOKEN_SECRET)
}

export const verifyRefreshToken = (token) => {
  return jwt.verify(token, REFRESH_TOKEN_SECRET)
}