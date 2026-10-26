import ChartForm from '../../components/ChartForm';
export default function Chart() {
  return (<><h1>New ADIME note</h1><ChartForm endpoint="/api/notes" after="view" /></>);
}
