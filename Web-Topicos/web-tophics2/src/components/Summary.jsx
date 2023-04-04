import { SummaryField } from "./SummaryField";
import { summaryInfo } from "../assets/SummaryInfo";

export function Summary() 
{
  return 
    (
      <section>
        <h2>Summary</h2>

          {summaryInfo.map((info) => {return <SummaryField image={info.image} type={info.type} score={info.score}></SummaryField>})}
      </section>
  )
}
  /*
  @marciommcg
  */

