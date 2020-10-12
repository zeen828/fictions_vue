import Api from '@/api/baseQL'

export default {
  // 下載APP
  download (ChannelId = '') {
    var data = {
      query: `{
        download(ChannelId: ${ChannelId}) {
          id,
          version,
          app_version,
          description,
          apk,
          download,
        }
      }`
    }
    return Api().post('/graphql', data)
  }
}
