export default function Attachments() {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-2xl font-bold">Attachments</div>
      <div className="text-sm text-gray-500 border border-dashed rounded-md">
        <div>example-text-document.pdf</div>
        <div>example-photo.jpg</div>
      </div>
      <div className="text-sm text-gray-500 h-14 border border-dashed border-neutral-400 rounded-md flex items-center justify-center">Drag and drop here to upload</div>
    </div>
  )
}