// for content management system (CMS) use preview mode by going to http://localhost:3000/api/preview?redirect=/news
export default function handler(req, res){
    res.setPreviewData({ user: 'Mark' })
    res.redirect(req.query.redirect)
}