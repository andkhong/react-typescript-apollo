import * as React from 'react';
import TermsWrapper from 'styled/Wrappers/Terms';

import Privacy from './Privacy/';
import { Route } from 'react-router-dom';

const routes: any = [
    {
        path: '/terms',
        exact: true,
        sidebar: () => <div> Terms </div>,
        main: () => <Terms />
    },
    {
        path: '/terms/privacy/',
        sidebar: () => <div> Privacy </div>,
        main: () => <Privacy />
    }
];

const SideBar = () => (
    <div>

    </div>
);

const Terms = () => (
   <div>
       {console.log('here')}
       {routes.map((route: any, index: number) => {
           <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
           />
       })}
    </div>
);

export default Terms;








// const Terms = () => (
//     <TermsWrapper>
//         TERMS OF SERVICE
// Last updated January 20th, 2018

// Welcome, and thank you for visiting our website (the “Site”). Beenest Inc. (“Company”, “we”, “us” or “our”) provides the Site, which has been created to, among other things, facilitate the sale of tokens (“Tokens” and, collectively, the “Products”) to you subject to the following terms of service (“Terms”). The Company Products are offered to you conditioned on your acceptance, without modification, of the Terms; if you do not agree to the Terms, you may not use the Products. Your use of the Products constitutes your agreement to all such Terms. Please read these Terms carefully, keep a copy of them for your reference, and if you have any questions about these Terms please contact us prior to using the Products.

// We are frequently modifying, updating, expanding, and improving the Products. We reserve the right, subject to applicable law, to make changes, modify, or add or remove portions of these Terms, our Privacy Policy, the Terms of Token Sale, Tokens and other incorporated terms and policies at any time, in our sole discretion. Nonetheless, we encourage you to check the Site frequently to see the current Terms in effect and any changes that may have been made to them. If we make material changes to these Terms, we will post the revised Terms and the revised effective date on the Site. Your continued use of the Products after the date of any such changes become effective constitutes your acceptance of the new Terms. No one at the Company is authorized to modify these Terms with you or otherwise enter into an agreement with you that conflicts with these Terms, except by means of written agreement signed by an authorized agent of the Company, and any other purported modifications or alterations or conflicting terms will be null and void.

// PLEASE READ THESE TERMS CAREFULLY, AS THEY CONTAIN AN AGREEMENT TO ARBITRATE AND OTHER IMPORTANT INFORMATION REGARDING YOUR LEGAL RIGHTS, REMEDIES, AND OBLIGATIONS.  THE AGREEMENT TO ARBITRATE REQUIRES (WITH LIMITED EXCEPTION) THAT YOU SUBMIT CLAIMS YOU HAVE AGAINST US TO BINDING AND FINAL ARBITRATION, AND FURTHER (1) YOU WILL ONLY BE PERMITTED TO PURSUE CLAIMS AGAINST THE COMPANY ON AN INDIVIDUAL BASIS, NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS OR REPRESENTATIVE ACTION OR PROCEEDING, AND (2) YOU WILL ONLY BE PERMITTED TO SEEK RELIEF (INCLUDING MONETARY, INJUNCTIVE, AND DECLARATORY RELIEF) ON AN INDIVIDUAL BASIS.

// Terms of Token Sale

// When you open an account with the Company, purchase Tokens, or engage in any other transaction with the Company, you also will be subject to the Terms of Token Sale and/or other similar agreements governing your use of our services. In the case of any conflict between the Terms and the Terms of Token Sale, the provisions of the Terms of Token Sale will control.
 
// Electronic Communications

// Visiting or using the Products or sending emails to the Company constitute electronic communications. By visiting the Site, using the Products, or sending emails to the Company, you consent to receive electronic communications and you agree that all agreements, notices, disclosures and other communications that we provide to you electronically, via email or on the Products, satisfy any legal requirement that such communications be in writing.

// Your Account

// If you use this Site, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password. You may not assign or otherwise transfer your account to any other person or entity. You acknowledge that the Company is not responsible for third party access to your account that results from theft or misappropriation of your account. The Company and its associates reserve the right, in our sole discretion, to refuse or cancel service, terminate accounts, or remove or edit content. You are responsible for maintaining the confidentiality of your password and account, if any, and are fully responsible for any and all activities that occur under your password or account. You agree to (a) immediately notify us of any unauthorized use of your password or account or any other breach of security, and (b) ensure that you exit from your account at the end of each session when accessing the Products. We will not be liable for any loss or damage arising from your failure to comply with this Section.

// If you are under eighteen (18), you may not use the Products and may not enter into a Terms of Token Sale under any circumstances.

// You acknowledge that we may establish general practices and limits concerning use of the Products, including without limitation the maximum period of time that data or other content will be retained by the Products and the maximum storage space that will be allotted on the Company’s servers on your behalf. You agree that we have no responsibility or liability for the deletion or failure to store any data or other content maintained or uploaded by the Products. You acknowledge that we reserve the right to terminate accounts that are inactive for an extended period of time. You further acknowledge that we reserve the right to change these general practices and limits at any time, in its sole discretion, with or without notice.

// Mobile Services

// The Products may include certain services that are available via a mobile device, including (i) the ability to upload content to the Products via a mobile device, (ii) the ability to browse the Products and the Site from a mobile device and (iii) the ability to access certain features through an application downloaded and installed on a mobile device (collectively, the “Mobile Services”). To the extent you access the Products through a mobile device, your wireless service carrier’s standard charges, data rates and other fees may apply.  In addition, downloading, installing, or using certain Mobile Services may be prohibited or restricted by your carrier, and not all Mobile Services may work with all carriers or devices. In the event you change or deactivate your mobile telephone number, you agree to promptly update your Company account information to ensure that your messages are not sent to the person that acquires your old number.

// Third Party Services

// The Products may contain links to other websites (“Linked Sites”). The Linked Sites are not under the control of the Company and the Company is not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site. The Company is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by the Company of the site or any association with its operators. You agree that you must evaluate, and bear all risks associated with, the use of any content, including any reliance on the accuracy, completeness, or usefulness of such content.

// Certain services made available via the Products are delivered by third party sites and organizations. By using any product, service or functionality originating from the Products domain, you hereby acknowledge and consent that the Company may share such information and data with any third party with whom the Company has a contractual relationship to provide the requested product, service or functionality on behalf of Products users and customers.

// Prohibited Uses and Intellectual Property

// You are granted a non-exclusive, non-sublicenseable, non-transferable, revocable license to access and use the Products strictly in accordance with these Terms. As a condition of your use of the Products, you warrant to the Company that you will not use the Products for any purpose that is unlawful or prohibited by these Terms. You may not use the Products in any manner that could damage, disable, overburden, or impair the Products or interfere with any other party’s use and enjoyment of the Products. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through the Products.

// All content included on the Products[, except for Submissions (as defined below),] such as text, graphics, logos, images, as well as the compilation thereof, and any software (including in both object code and source code form) or other proprietary data or information used in connection with the Products (collectively, “Content”), is the property of the Company or its suppliers or licensors and is protected by copyright, trademark and other laws that protect intellectual property and proprietary rights. You agree to observe and abide by all copyright and other proprietary notices, legends or other restrictions contained in any such content and will not make any changes thereto.

// You will not modify, publish, transmit, reverse engineer, participate in the transfer or sale, create derivative works, or in any way exploit any of the Products, including any Content, in whole or in part. The Products and Content are not for resale. Your use of the Products does not entitle you to make any unauthorized use of any Content, and in particular you will not delete or alter any proprietary rights or attribution notices in any Content. You will use Content solely for your personal use, and will make no other use of Content without the express written permission of the Company and the copyright owner. You agree that you do not acquire any ownership rights in any Content. We do not grant you any licenses, express or implied, to the intellectual property of the Company or our licensors except as expressly authorized by these Terms. If you are blocked by us from accessing the Products (including by blocking your IP address), you agree not to implement any measures to circumvent such blocking (e.g., by masking your IP address or using a proxy IP address).

// Special Notice for International Use; Export Controls

// The technology and software underlying the Products (“Software”) available in connection with the Products and the transmission of applicable data, if any, is subject to United States export controls.  No Software may be downloaded from the Products or otherwise exported or re-exported in violation of U.S. export laws.  Downloading or using the Software is at your sole risk.  Recognizing the global nature of the Internet, you agree to comply with all local rules and laws regarding your use of the Products.

// International Users

// The Products are controlled, operated and administered by the Company from our offices within the United States of America. If you access the Products from a location outside the USA, you are responsible for compliance with all local laws, whether in the United States or in your jurisdiction. You agree that you will not use the Content accessed through the Products in any country or in any manner prohibited by any applicable laws, restrictions or regulations.

// Indemnification

// You agree to indemnify, defend and hold harmless the Company, its officers, directors, employees, agents, consultants, subsidiaries, affiliates and other related parties (each an “Indemnified Party”, harm from and against all demands losses, costs, liabilities claims, actions and expenses (including reasonable attorneys’ fees) relating to or arising out of your use of or inability to use the Products or services, your violation of these Terms or your violation of any rights of a third party, or your violation of any applicable laws, rules or regulations. The Company reserves the right, at its own cost, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will fully cooperate with the Company in asserting any available defenses.  Notwithstanding the foregoing, you will have no obligation to indemnify, defend or hold harmless any Indemnified Party from or against any liability, damages or costs incurred as a result of the gross negligence or willful misconduct of such Indemnified Party.

// IF YOU ARE A USER FROM NEW JERSEY, THE FOREGOING SECTION ENTITLED “INDEMNIFICATION” IS INTENDED TO BE ONLY AS BROAD AS IS PERMITTED UNDER THE LAWS OF THE STATE OF NEW JERSEY.  IF ANY PORTION OF THIS SECTION IS HELD TO BE INVALID UNDER THE LAWS OF THE STATE OF NEW JERSEY, THE INVALIDITY OF SUCH PORTION SHALL NOT AFFECT THE VALIDITY OF THE REMAINING PORTIONS OF THE APPLICABLE SECTION. 

// Disclaimers 

// YOUR USE OF THE PRODUCTS IS AT YOUR SOLE RISK. THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE PRODUCTS MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. THE COMPANY AND/OR ITS SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THE PRODUCTS AT ANY TIME.

// THE COMPANY AND/OR ITS SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, SECURITY AND ACCURACY OF THE COMPANY PRODUCTS, INCLUDING THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED THEREIN, FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE COMPANY PRODUCTS AND ALL RELATED INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND GRAPHICS ARE PROVIDED “AS IS” WITHOUT WARRANTY OR CONDITION OF ANY KIND. THE COMPANY AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THE PRODUCT AND SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.  THE COMPANY CANNOT ENSURE THAT ANY FILES OR OTHER DATA YOU DOWNLOAD FROM THE AS PART OF OR IN CONNECTION WITH THE PRODUCTS WILL BE FREE OF VIRUSES OR CONTAMINATION OR DESTRUCTIVE FEATURES, AND, IN PARTICULAR, YOU ACCEPT ALL RISK AND LIABILITY IN CONNECTION WITH YOUR PARTICIPATION IN THE THREAT ANALYSIS PORTION OF THE COMPANY PRODUCTS.

// IF YOU ARE A USER FROM NEW JERSEY, THE FOREGOING SECTION ENTITLED “DISCLAIMERS” IS INTENDED TO BE ONLY AS BROAD AS IS PERMITTED UNDER THE LAWS OF THE STATE OF NEW JERSEY.  IF ANY PORTION OF THIS SECTION IS HELD TO BE INVALID UNDER THE LAWS OF THE STATE OF NEW JERSEY, THE INVALIDITY OF SUCH PORTION SHALL NOT AFFECT THE VALIDITY OF THE REMAINING PORTIONS OF THE APPLICABLE SECTION.

// Limitation of Liability

// TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE COMPANY AND/OR ITS SUPPLIERS BE LIABLE FOR (A) ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THE PRODUCTS, WITH THE DELAY OR INABILITY TO USE THE PRODUCTS OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, OTHER PRODUCTS, SERVICES AND RELATED GRAPHICS OBTAINED THROUGH THE PRODUCTS, OR OTHERWISE ARISING OUT OF THE USE OF THE COMPANY PRODUCTS, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF THE COMPANY OR ANY OF ITS SUPPLIERS HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES; OR (B) ANY AMOUNT, WHETHER INDIVIDUALLY OR IN THE AGGREGATE, EXCEEDING $25. BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE PRODUCTS, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE COMPANY SERVICES.

// IF YOU ARE A USER FROM NEW JERSEY, THE FOREGOING SECTION ENTITLED “LIMITATION OF LIABILITY” ARE INTENDED TO BE ONLY AS BROAD AS IS PERMITTED UNDER THE LAWS OF THE STATE OF NEW JERSEY.  IF ANY PORTION OF THIS SECTION IS HELD TO BE INVALID UNDER THE LAWS OF THE STATE OF NEW JERSEY, THE INVALIDITY OF SUCH PORTION SHALL NOT AFFECT THE VALIDITY OF THE REMAINING PORTIONS OF THE APPLICABLE SECTION.

// USE OF THE PRODUCTS IS UNAUTHORIZED IN ANY JURISDICTION THAT DOES NOT GIVE EFFECT TO ALL PROVISIONS OF THESE TERMS, INCLUDING, WITHOUT LIMITATION, THIS SECTION.

// Termination 

// The Company reserves the right, in its sole discretion, to terminate your access to the Products and its related services or any portion thereof at any time and for any reason, without notice. 

// Dispute Resolution by Binding Arbitration; Jury Trail Waiver; Class Action Waiver. PLEASE READ THIS SECTION CAREFULLY AS IT AFFECTS YOUR RIGHTS. 

// For any and all controversies, disputes, demands, claims, or causes of action between you and us (including the interpretation and scope of this Section and the arbitrability of the controversy, dispute, demand, claim, or cause of action) relating to the Products or these Terms (as well as any related or prior agreement that you may have had with us), you and we agree to resolve any such controversy, dispute, demand, claim, or cause of action exclusively through binding and confidential arbitration. A party who intends to seek arbitration must first send to the other, by certified mail, a written Notice of Dispute (“Notice”).  The Notice to the Company should be sent to 360 Berry St. #527, San Francisco, CA 94158 (“Notice Address”). The Notice must (i) describe the nature and basis of the claim or dispute and (ii) set forth the specific relief sought.  If the Company and you do not resolve the claim within sixty (60) calendar days after the Notice is received, you or the Company may commence an arbitration proceeding. During the arbitration, the amount of any settlement offer made by the Company or you shall not be disclosed to the arbitrator until after the arbitrator determines the amount, if any, to which you or the Company is entitled. The arbitration will take place in New York, New York, or if that is deemed inappropriate, the federal judicial district of your residence. As used in this Section, “we” and “us” means Beenest, Inc.. In addition, “we” and “us” include any third party providing any product, service, or benefit in connection with the Products or these Terms (as well as any related or prior agreement that you may have had with us) if such third party is named as a co-party with us in any controversy, dispute, demand, claim, or cause of action subject to this Section.

// Arbitration will be subject to the Federal Arbitration Act and not any state arbitration law. The arbitration will be conducted before one commercial arbitrator from the American Arbitration Association (“AAA”) with substantial experience in resolving commercial contract disputes. As modified by these Terms, and unless otherwise agreed upon by the parties in writing, the arbitration will be governed by the AAA’s Commercial Arbitration Rules and, if the arbitrator deems them applicable, the Supplementary Procedures for Consumer Related Disputes (collectively, the “Rules and Procedures”). Where no claims or counterclaims exceed $10,000, the dispute will be resolved by the submission of documents without a hearing, unless a hearing is requested by a party or deemed necessary by the arbitrator, in which case, a party may elect to participate telephonically.

// You should review this provision carefully. To the extent permitted by applicable law, you are GIVING UP YOUR RIGHT TO GO TO COURT to assert or defend your rights EXCEPT for matters that you file in small claims court in the state or municipality of your residence within the jurisdictional limits of the small claims court and as long as such matter is only pending in that court. Additionally, notwithstanding this agreement to arbitrate, claims of defamation, and infringement or misappropriation of the other party’s patent, copyright, trademark, or trade secret shall not be subject to this arbitration agreement. Such claims shall be exclusively brought in the state or federal courts located in the Santa Clara County, California. Additionally, notwithstanding this agreement to arbitrate, you or us may seek emergency equitable relief before the state or federal courts located in the Santa Clara County, California in order to maintain the status quo pending arbitration and hereby agree to submit to the exclusive personal jurisdiction of the courts located within the Santa Clara County, California for such purpose. A request for interim measures shall not be deemed a waiver of the right to arbitrate.

// Your rights will be determined by a NEUTRAL ARBITRATOR and NOT a judge or jury. You are entitled to a FAIR HEARING, BUT the arbitration procedures may be SIMPLER AND MORE LIMITED THAN RULES APPLICABLE IN COURT. Arbitrators’ decisions are as enforceable as any court order and are subject to VERY LIMITED REVIEW BY A COURT.

// You and we must abide by the following rules: (A) ANY CLAIMS BROUGHT BY YOU OR US MUST BE BROUGHT IN THE PARTY’S INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING; (B) THE ARBITRATOR MAY NOT CONSOLIDATE MORE THAN ONE PERSON’S CLAIMS, MAY NOT OTHERWISE PRESIDE OVER ANY FORM OF A REPRESENTATIVE OR CLASS PROCEEDING, AND MAY NOT AWARD CLASS-WIDE RELIEF; (c) in the event that you are able to demonstrate that the costs of arbitration will be prohibitive as compared to the costs of litigation, we will pay as much of your filing and hearing fees in connection with the arbitration as the arbitrator deems necessary to prevent the arbitration from being cost- prohibitive as compared to the cost of litigation, (d) we also reserve the right, in our sole and exclusive discretion, to assume responsibility for any or all of the costs of the arbitration; (e) the arbitrator will honor claims of privilege and privacy recognized at law; (f) the arbitration will be confidential, and neither you nor we may disclose the existence, content, or results of any arbitration, except as may be required by applicable law or for purposes of enforcement of the arbitration award; (g) subject to the limitation of liability provisions of these Terms, the arbitrator may award any individual relief or individual remedies that are expressly permitted by applicable law; and (h) you and we will pay our respective attorneys’ fees and expenses, unless there is a statutory provision that requires the prevailing party to be paid its fees and litigation expenses and the arbitrator awards such attorneys’ fees and expenses to the prevailing party, and, in such instance, the fees and costs awarded will be determined by the applicable law.

// Payment of all filing, administration, and arbitrator fees (collectively, the “Arbitration Fees”) will be governed by the AAA Rules, unless otherwise provided in this Arbitration Agreement.  If the value of the relief sought is $75,000 or less, at your request, we will pay all Arbitration Fees.  If the value of relief sought is more than $75,000 and you are able to demonstrate to the arbitrator that you are economically unable to pay your portion of the Arbitration Fees or if the arbitrator otherwise determines for any reason that you should not be required to pay your portion of the Arbitration Fees, we will pay your portion of such fees.  In addition, if you demonstrate to the arbitrator that the costs of arbitration will be prohibitive as compared to the costs of litigation, Company will pay as much of the Arbitration Fees as the arbitrator deems necessary to prevent the arbitration from being cost-prohibitive.  Any payment of attorneys’ fees will be governed by the AAA Rules.

// All aspects of the arbitration proceeding, and any ruling, decision, or award by the arbitrator, will be strictly confidential for the benefit of all parties.

// This Section will survive termination of your account and these Terms as well as any voluntary payment of any debt in full by you or any bankruptcy by you or us. With the exception of subparts (a) and (b) above of this Section (prohibiting arbitration on a class or collective basis), if any part of this arbitration provision is deemed to be invalid, unenforceable, or illegal, or otherwise conflicts with the Rules and Procedures, then the balance of this arbitration provision will remain in effect and will be construed in accordance with its terms as if the invalid, unenforceable, illegal or conflicting part was not contained herein. If, however, either subpart (a) or (b) above of this Section is found to be invalid, unenforceable, or illegal, then the entirety of this arbitration provision will be null and void, and neither you nor we will be entitled to arbitration. If for any reason a claim proceeds in court rather than in arbitration, the dispute shall be exclusively brought in state or federal court located in Santa Clara County, California.

// Notwithstanding any provision in these Terms to the contrary, the Company agrees that if it makes any future change to this arbitration section (other than a change to the Notice Address) while you are a user of the Company Products, you may reject any such change by sending us written notice within thirty (30) calendar days of the change to the Notice Address provided above.  By rejecting any future change, you are agreeing that you will arbitrate any dispute between us in accordance with the language of this arbitration section as of the date you first accepted these Terms (or accepted any subsequent changes to these Terms).

// For more information on the AAA, the Rules and Procedures, or the process for filing an arbitration claim, you may call the AAA at 888-778-7879 or visit the AAA website at http://www.adr.org.

// YOU AGREE THAT, TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ANY CLAIM OR CAUSE OF ACTION ARISING OUT OF OR RELATING TO THE SERVICE OR THESE TERMS MUST BE FILED WITHIN ONE (1) YEAR AFTER SUCH CLAIM OR CAUSE OF ACTION AROSE OR IT WILL BE FOREVER BARRED.

// User Disputes

// You agree that you are solely responsible for your interactions with any other user in connection with the Products and the Company will have no liability or responsibility with respect thereto.  We reserve the right, but has no obligation, to become involved in any way with disputes between you and any other user of the Products.

// General 

// These Terms will be governed by the laws of the State of Delaware without regard to its conflict of law provisions. With respect to any disputes or claims not subject to arbitration, as set forth above, you and the Company agree to submit to the personal and exclusive jurisdiction of the state and federal courts located within Santa Clara County, California. The failure of the Company to exercise or enforce any right or provision of these Terms will not constitute a waiver of such right or provision. If any provision of these Terms is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties’ intentions as reflected in the provision, and the other provisions of these Terms remain in full force and effect. A printed version of this agreement and of any notice given in electronic form will be admissible in judicial or administrative proceedings based upon or relating to this agreement to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form. You may not assign these Terms without the prior written consent of the Company, but the Company may assign or transfer these Terms, in whole or in part, without restriction. The section titles in these Terms are for convenience only and have no legal or contractual effect. Notices to you may be made via either email or regular mail. 

// You agree that no joint venture, partnership, employment, or agency relationship exists between you and the Company as a result of this agreement or use of the Products. The Company’s performance of this agreement is subject to existing laws and legal process, and nothing contained in this agreement is in derogation of the Company’s right to comply with governmental, court and law enforcement requests or requirements relating to your use of the Products or information provided to or gathered by the Company with respect to such use. 

// Unless otherwise specified herein, these Terms constitutes the entire agreement between the user and the Company with respect to the Products and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral or written, between the user and the Company with respect to the Products, except for any Terms of Token Sale into which you enter with the Company. A printed version of this agreement and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to this agreement to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form. It is the express wish to the parties that this agreement and all related documents be written in English.

// Your Privacy

// At the Company, we respect the privacy of our users. For details please see our Privacy Policy.  By using the Products, you consent to our collection and use of personal data as outlined therein.

// Notice for California Users

// Under California Civil Code Section 1789.3, users of the Service from California are entitled to the following specific consumer rights notice: The Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs may be contacted in writing at 1625 North Market Blvd., Suite N 112, Sacramento, CA 95834, or by telephone at (916) 445-1254 or (800) 952-5210. You may contact us at team@thebeetoken.com.

// Contact Us

// The Company welcomes your questions or comments regarding these Terms via email at team@thebeetoken.com.

//     </TermsWrapper>
// );

// export default Terms;