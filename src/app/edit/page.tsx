import PlateEditor from '@/components/plate-editor';
import DirectoryEditor from '@/components/directory-editor';

export default function IndexPage() {
  return (
    <div className="flex flex-row border-b">
      <div className="basis-1/5 border-r">
        <DirectoryEditor></DirectoryEditor>
      </div>
      <div className="basis-4/5">
        <PlateEditor></PlateEditor>
      </div>
    </div>
  );
}
