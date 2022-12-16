// for content management system (CMS) to disable preview mode go to http://localhost:3000/api/disable-preview
export default function handler(req, res){
    res.clearPreviewData()
    res.end('Preview mode disabled')
}