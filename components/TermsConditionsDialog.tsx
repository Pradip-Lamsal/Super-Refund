"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRef, useState } from "react";

interface TermsConditionsDialogProps {
  triggerText?: string;
  triggerVariant?: "default" | "outline" | "ghost" | "link";
  triggerClassName?: string;
}

export default function TermsConditionsDialog({
  triggerText = "Terms & Conditions",
  triggerVariant = "link",
  triggerClassName = "",
}: TermsConditionsDialogProps) {
  const [hasReadToBottom, setHasReadToBottom] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const content = contentRef.current;
    if (!content) return;

    const scrollPercentage =
      content.scrollTop / (content.scrollHeight - content.clientHeight);
    if (scrollPercentage >= 0.99 && !hasReadToBottom) {
      setHasReadToBottom(true);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={triggerVariant} className={triggerClassName}>
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-2xl [&>button:last-child]:top-3.5">
        <DialogHeader className="contents space-y-0 text-left">
          <DialogTitle className="border-b px-6 py-4 text-base">
            Legal Information and Terms of Usage
          </DialogTitle>
          <div
            ref={contentRef}
            onScroll={handleScroll}
            className="overflow-y-auto"
          >
            <DialogDescription asChild>
              <div className="px-6 py-4">
                <div className="space-y-6 text-gray-700 [&_strong]:font-semibold [&_strong]:text-gray-900">
                  <div className="space-y-2">
                    <p className="text-sm leading-relaxed">
                      Refundmysuper.com.au is a trading name of the services of
                      EATA, Sydney, Australia
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p>
                      <strong>Our Guarantee</strong>
                    </p>
                    <p className="text-sm leading-relaxed">
                      Refundmysuper.com.au guarantees that if we will use its
                      best endeavours to organise any due refund of superfund
                      for people who have worked in Australia.
                    </p>
                    <p className="text-sm leading-relaxed">
                      refundmysuper.com will organise the refund of the maximum
                      amount possible based on the information and documentation
                      provided by its customers and in line with the legal
                      entitlements and obligations of the customer within the
                      tax law of Australia.
                    </p>
                    <p className="text-sm leading-relaxed">
                      refundmysuper.com.au will provide the refund as
                      expediently as possible, subject to the provision of the
                      necessary documents by the customers and the efficient
                      processing of the refund application by the ATO
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p>
                      <strong>
                        Exceptions to our tax refund responsibilities
                      </strong>
                    </p>
                    <p className="text-sm leading-relaxed">
                      refundmysuper.com.au is not responsible for the refund of
                      tax where:
                    </p>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>
                        the customer has provided information which is false,
                        inaccurate, incorrect, insufficient or misleading in any
                        way;
                      </li>
                      <li>the customer has already received a super refund;</li>
                      <li>
                        the customer is owed or entitled to funds either
                        directly or through another person, natural or legal;
                      </li>
                      <li>
                        the customer owes money to the Australian Taxation
                        Office;
                      </li>
                      <li>
                        the ATO has different information on its system than
                        that provided by the customer
                      </li>
                      <li>
                        the ATO information leads to a decision that the
                        customer is not due a refund. Where there is a possible
                        case for appeal within the law, such measures will be
                        taken by refundmysuper.com.au where the customer
                        information enables it to do so.
                      </li>
                    </ul>
                    <p className="text-sm leading-relaxed mt-2">
                      refundmysuper.com.au will endeavour to help the customer
                      resolve these issues, provided it receives all necessary
                      information and instruction from the customer.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p>
                      <strong>Power of Attorney</strong>
                    </p>
                    <p className="text-sm leading-relaxed">
                      When the customer signs a Power of Attorney permitting
                      refundmysuper.com.au to organise his/her refund, he/she is
                      agreeing to pay the fee to refundmysuper.com.au for the
                      organisation of the refund. If the customer has signed a
                      Power of Attorney authorising refundmysuper.com.au to
                      organise his/her refund, and has with or without his or
                      her knowledge, applied or authorised any other person,
                      natural or legal, to organise the same refund, he/she will
                      owe refundmysuper.com.au the fee for the organisation of a
                      refund. Notwithstanding that the customer has obtained a
                      refund otherwise than with the assistance of
                      refundmysuper.com.au.
                    </p>
                    <p className="text-sm leading-relaxed">
                      If the ATO sends the due refund to the customer directly,
                      rather than to refundmysuper.com.au, the customer still
                      owes the processing fee in full to refundmysuper.com.au
                      for the service rendered, which resulted in the issuing of
                      the refund
                    </p>
                    <p className="text-sm leading-relaxed">
                      If the customer does not pay this fee, pursuant to the
                      information above on a voluntary basis or on request from
                      refundmysuper.com.au, refundmysuper.com.au reserves the
                      right to:
                    </p>
                    <ol className="list-decimal pl-6 text-sm space-y-1">
                      <li>
                        Take legal action to pursue the customer for the fee due
                      </li>
                      <li>
                        Publish the name of the customer as a Bad Debtor in the
                        local newspaper, on the refundmysuper.com.au website and
                        other media if the fee has not been paid within the
                        national terms given
                      </li>
                      <li>
                        Report the customer as a Bad Debtor to the relevant
                        financial institutions of Australia
                      </li>
                    </ol>
                  </div>

                  <div className="space-y-2">
                    <p>
                      <strong>
                        Processing A power of Attorney on Australian
                      </strong>
                    </p>
                    <p className="text-sm leading-relaxed">
                      Once authorised and registered as your tax agent with the
                      ATO, all correspondence regarding your application must be
                      handled directly by refundmysuper.com.au. Any measure
                      taken by you, the customer, to make direct contact with
                      the tax office without first consulting
                      refundmysuper.com.au will be considered as a breach of
                      contract and our relevant processing fee will still apply
                      for all processing work completed by us during the
                      application process.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p>
                      <strong>
                        By signing and completing our documentation:
                      </strong>
                    </p>
                    <p className="text-sm leading-relaxed">
                      You understand that you will be contacted by
                      refundmysuper.com.au after using any of the online tax
                      calculator(s). You can opt out of receiving any further
                      correspondence by emailing info@refundmysuper.com.au.
                    </p>
                    <p className="text-sm leading-relaxed">
                      You understand that refundmysuper.com.au will issue a
                      refund estimation on receipt of your completed and signed
                      forms. You understand that receipt of your completed
                      documentation authorises refundmysuper.com.au to submit
                      your application to the relevant tax office. Should you
                      wish to cancel your application, you must contact
                      refundmysuper.com.au - immediately. You understand that
                      while refundmysuper.com.au will make every effort to
                      recall your application, this may not be possible.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p>
                      <strong>Emails</strong>
                    </p>
                    <p className="text-sm leading-relaxed">
                      All emails to the customer will be sent to the email
                      address provided by the customer at registration.
                      refundmysuper.com.au will expect that the customer will
                      ensure there is sufficient space in his/her inbox to
                      receive all emails and that the customer checks his/her
                      email regularly - being about three times a week.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p>
                      <strong>Minimum Fee</strong>
                    </p>
                    <p className="text-sm leading-relaxed">
                      refundmysuper.com.au has a minimum fee for each super
                      refund application. Refundmysuper.com.au will provide
                      information of the fee applicable per application per tax
                      country.
                    </p>
                    <p className="text-sm leading-relaxed">
                      For additional value-added services provided by
                      refundmysuper.com.au to the customer, additional fees will
                      be charged to cover associated administrative and
                      management costs. Such additional services include, but
                      are not limited to: document retrieval, personal number
                      (e.g., TFN) verification, residency and non-residency
                      document organisation where relevant, amendment
                      preparation for previous returns, and certain payment
                      options. For information about the fee for the additional
                      services rendered for an individual case, the customer
                      should email info@atra.com.au. Refundmysuper.com.au will
                      provide information of the fee applicable per customer
                      case.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p>
                      <strong>Refund Issuance</strong>
                    </p>
                    <p className="text-sm leading-relaxed">
                      Refundmysuper.com.au will send the refund to the customer
                      as agreed per communication with the customer.
                    </p>
                    <p className="text-sm leading-relaxed">
                      Depending on the super being refunded, the usual method is
                      by bank transfer. Super refunds received by bank transfer
                      can be transferred to the customers account in any
                      currency they may choose. Customers may also opt to
                      receive their super refund by cheque, however in this
                      instance customer should notify Refundmysuper.com.au of
                      the currency they wish to receive their cheque in as early
                      as possible in the super refund process.
                      Refundmysuper.com.au will contact the customer at the time
                      of refund to offer different payment options and at this
                      stage should be supplied with bank details for the refund
                      transfer.
                    </p>
                    <p className="text-sm leading-relaxed">
                      Refundmysuper.com.au will contact the customer at the time
                      of refund to offer different payment options and at this
                      stage should be supplied with bank details for the refund
                      transfer.
                    </p>
                    <p className="text-sm leading-relaxed">
                      Where refundmysuper.com.au receives the money from the
                      super company, it will deduct its fee, plus necessary tax,
                      from the amount sent to the customer.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p>
                      <strong>Bank Charges</strong>
                    </p>
                    <p className="text-sm leading-relaxed">
                      In the case of payment by cheque, refundmysuper.com.au has
                      no control over the fees charges levied by banks in
                      cashing the cheque. Refundmysuper.com.au has developed
                      different payment methods in many markets in order to
                      offer the customer a choice. Refundmysuper.com.au will
                      inform the customer when the choice of payment option is
                      offered.
                    </p>
                    <p className="text-sm leading-relaxed">
                      Refundmysuper.com.au will inform the customer of any
                      currency exchange rates by the banks or any time.
                      Refundmysuper.com.au will not be liable for any
                      Refundmysuper.com.au charges and/or currency exchange
                      rates. Refundmysuper.com.au informs the customer when the
                      choice of payment option is offered.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p>
                      <strong>Communications</strong>
                    </p>
                    <p className="text-sm leading-relaxed">
                      Unless requested to do otherwise by the customer,
                      refundmysuper.com.au will advise current and past
                      customers of:
                    </p>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>
                        All new returns that they may be entitled to as and when
                        information becomes available from the ATO;
                      </li>
                      <li>
                        All new services that they may be entitled to through
                        refundmysuper.com.au;
                      </li>
                      <li>
                        All new services offered by refundmysuper.com.au and
                        associated companies.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <p>
                      <strong>Amendments to Terms and Conditions</strong>
                    </p>
                    <p className="text-sm leading-relaxed">
                      From time to time, refundmysuper.com.au may amend or add
                      to these Terms and Conditions should the need arise. Such
                      changes will be posted on the web-site terms and
                      conditions and customers are advised to check it regularly
                      to receive these updates.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p>
                      <strong>Agreement</strong>
                    </p>
                    <p className="text-sm leading-relaxed">
                      The submission of a registration to refundmysuper.com.au,
                      by web, post, hand, fax, or email, constitutes agreement
                      to these Terms & Conditions, including amendments thereto,
                      by the customer.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p>
                      <strong>Confidentiality and Data Handling</strong>
                    </p>
                    <p className="text-sm leading-relaxed">
                      refundmysuper.com.au ensures that all client information
                      is held as private and confidential. Information collected
                      in writing and/or verbally for super refund filing
                      services can and may be used for internal auditing
                      purposes by refundmysuper.com.au and provided to the ATO
                      for auditing purposes.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p>
                      <strong>Customer Feedback</strong>
                    </p>
                    <p className="text-sm leading-relaxed">
                      Should the customer like to query the quality of service
                      delivered at any time, he/she is invited to email us at
                      info@refundmysuper.com.au. We will guarantee that the
                      email will be replied to within 48 hours.
                    </p>
                  </div>

                  <div className="border-t pt-4 mt-6">
                    <p className="text-xs text-center text-gray-500">
                      © 2025 Refund My Super. All Rights Reserved. Dobaato Info
                      Tech Pvt Ltd.
                    </p>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </div>
        </DialogHeader>
        <DialogFooter className="border-t px-6 py-4 sm:items-center">
          {!hasReadToBottom && (
            <span className="text-muted-foreground grow text-xs max-sm:text-center">
              Read all terms before accepting.
            </span>
          )}
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Close
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="button" disabled={!hasReadToBottom}>
              I Agree
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
