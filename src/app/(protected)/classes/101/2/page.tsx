import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const Page2 = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="font-bold text-4xl">101.2 Pinatigil ni Jesus ang Unos - Lucas 8:23-25</h1>
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>I. Panimula</AccordionTrigger>
          <AccordionContent>
            <p className="p1">1. Kumustahin ang nagdaang mga araw ng mga dumalo (Kumustahan <em>Blues</em>).<span className="Apple-converted-space">&nbsp;</span></p>
            <p className="p1">2. Ipamahagi ang mga sinagutang <em>Ang Sagot.<span className="Apple-converted-space">&nbsp;</span></em></p>
            <p className="p1">3. (Opsyonal) Umawit ng isa o dalawang masisiglang awitin.<span className="Apple-converted-space">&nbsp;</span></p>
            <p className="p1">4. Panimulang Katanungan: Naranasan mo na bang abutan ng malakas na bagyo habang daan? Ano ang iyong naramdaman? I-detalye ang kwento.<span className="Apple-converted-space">&nbsp;</span></p>
            <p className="p1">5. Basahin ang <strong>Lucas 8:23-25.<span className="Apple-converted-space">&nbsp;</span></strong></p>
            <p className="p2">&nbsp;</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>II. Pag-aaralan ang mga Talata</AccordionTrigger>
          <AccordionContent>
          <p className="p1">1. Sa <strong>Tal. 23</strong>, anong ginagawa ng Panginoon habang sila&rsquo;y naglalayag kasama ng mga apostol?<span className="Apple-converted-space">&nbsp;</span></p>
          <p className="p1">2. Anong nangyari habang sila&rsquo;y naglalayag?<span className="Apple-converted-space">&nbsp;</span></p>
          <p className="p1">3. Kung ikaw ang nasa kanilang kalagayan, ano kaya ang iyong iisipin at mararamdaman?<span className="Apple-converted-space">&nbsp;</span></p>
          <p className="p1">4. Sa <strong>Tal. 24</strong>, bakit kaya sinabi ng mga alagad na, &ldquo;Lulubog tayo&rdquo;? Takot ba sila sa tubig, gayong sila&rsquo;y mga bihasa sa dagat sapagkat sila&rsquo;y pawang mga mangingisda?<span className="Apple-converted-space">&nbsp;</span></p>
          <p className="p1">5. Sa <strong>Tal. 25</strong>, ano ang sinabi ng Panginoon sa mga alagad? Ipaliwanag kung bakit kaya sinabi ito sa kanila ng Panginoon.<span className="Apple-converted-space">&nbsp;</span></p>
          <p className="p1">6. Kung kasama mo ngayon si Jesus, may dapat ka bang katakutan? Ipaliwanag kung bakit.<span className="Apple-converted-space">&nbsp;</span></p>
          <p className="p1">7. Ano ang itinuturo ng pangyayaring ito sa atin? Ang lahat ay dapat magbigay ng kuro-kuro.<span className="Apple-converted-space">&nbsp;</span></p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>III. Aplikasyon</AccordionTrigger>
          <AccordionContent>
          <p className="p1">1. Kung ang Panginoon ay kayang kontrolin maging ang hangin, tubig o unos, makaya kaya Niya tayong dalhin sa kalangitan?<span className="Apple-converted-space">&nbsp;</span></p>
          <p className="p1">2. Ano ang kailangang makita sa atin ng Panginoon? Tanungin ang bawat isa.<span className="Apple-converted-space">&nbsp;</span></p>
          <p className="p2">3. Ano sa palagay ninyo ang ibig sabihin ng &ldquo;pananampalataya&rdquo;? Suhestiyon: paniniwala, pagtitiwala, at pagtanggap na ito&rsquo;y totoo.<span className="Apple-converted-space">&nbsp;</span></p>
          <p className="p2">4. Talakayin: Dapat nating panampalatayanan na si Jesus ay may kakayahang dalhin tayo sa buhay na walang hanggan.<span className="Apple-converted-space">&nbsp;</span></p>
          <p className="p2">5. Basahin at sauluhin sa susunod na pagpupulong:<span className="Apple-converted-space">&nbsp;</span></p>
          <p className="p2"><strong>Juan 3:16<span className="Apple-converted-space">&nbsp;</span></strong></p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>IV. Panalanginan</AccordionTrigger>
          <AccordionContent>
          <p className="p2">1. Maghayag ang bawat isa ng mga <em>prayer requests</em>.<span className="Apple-converted-space">&nbsp;</span></p>
          <p className="p2">2. Magtalaga ng tagapaglista ng pananalangin. Isulat sa ibaba ang mga <em>prayer requests</em>.<span className="Apple-converted-space">&nbsp;</span></p>
          <p className="p2">3. Manalangin para sa lahat pati na rin ang mga <em>prayer requests</em>.<span className="Apple-converted-space">&nbsp;</span></p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}

export default Page2