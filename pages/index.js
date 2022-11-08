const checkboxFields = [
  {
    "text": "Record Make & Model",
    "extraInputName": 'makeAndModel'
  },
  {
    "text": "Service Tag Number",
    "extraInputName": 'serviceTag'
  },
  {
    "text": "Express Service Code",
    "extraInputName": 'expressServiceCode'
  },
  {
    "text": "Warranty Expiration Date",
    "extraInputName": 'warrantyExpirationDate'
  },
  {
    "text": "Monitor Serial Number",
    "extraInputName": 'monitorSerial'
  },
  {
    "text": "Windows Version",
    "extraInputName": 'windowsVersion'
  },
  {
    "text": "Windows Product Key",
    "extraInputName": 'windowsProductKey'
  },
  {
    "text": "Computer Name or default",
    "extraInputName": 'computerName'
  },
  {
    "text": "Local Administrators Password",
    "extraInputName": 'adminPassword'
  },
  {
    "text": "Antivirus Version",
    "extraInputName": 'antivirusVersion'
  },
  {
    "text": "Antivirus Product Key",
    "extraInputName": 'antivirusProductKey'
  },
  {
    "text": "Record MS Office Version",
    "extraInputName": 'officeVersion'
  },
  {
    "text": "Record MS Office Product Key",
    "extraInputName": 'officeProductKey'
  },
  {
    "text": "Microsoft Account for Office",
    "extraInputName": 'microsoftAccount'
  },
  {
    "text": "Record PDF Software Version",
    "extraInputName": 'pdfVersion'
  },
  {
    "text": "Record PDF Software Product Key",
    "extraInputName": 'pdfProductKey'
  },
  {
    "text": "Setup Generic Username as 'User'",
  },
  {
    "text": "Rename Computer",
  },
  {
    "text": "Enable Wake on LAN in BIOS (Disable Deep Sleep and Set Last Power State), Set Boot Order",
  },
  {
    "text": "Enable and set password for local administrator account",
  },
  {
    "text": "Set Control Panel View and Performance Settings IF NECESSARY",
  },
  {
    "text": "Disable the Windows Firewall (or exclude only the Integrated NIC on laptops)",
  },
  {
    "text": "Turn off ‘Use Sharing Wizard’ and uncheck \"Hide empty drives in the Computer folder\"",
  },
  {
    "text": "Check for and uninstall any unnecessary software (i.e., Toolbars, etc.)",
  },
  {
    "text": "Configure Screen Saver & Power Settings (Desktop or Laptop)",
  },
  {
    "text": "Create a \"Temp-DHS\" and \"ProgramCDs\" folder on root drive",
  },
  {
    "text": "Add shortcut to http://support.drakehs.com to the desktop AND to C:\\Users\\Default\\Desktop\\",
  },
  {
    "text": "Install latest version of Microsoft Edge",
  },
  {
    "text": "Install Google Chrome ",
  },
  {
    "text": "Install Acrobat Reader (even if a full version of Acrobat is installed)",
  },
  {
    "text": "Open Adobe Reader and accept the License terms, Disable Automatic Updating",
  },
  {
    "text": "Install 32-bit Office (if needed)",
  },
  {
    "text": "Run Dell Command | Update and install any available updates",
  },
  {
    "text": "Install Microsoft Updates",
  },
  {
    "text": "Check Dell Digital Delivery, install and activate applications as necessary (Usually Foxit PhantomPDF)",
  },
  {
    "text": "Start MS Word and Activate and Register",
  },
  {
    "text": "Update Antivirus Software",
  },
  {
    "text": "Set Task Bar & Start Menu Options",
  },
  {
    "text": "Run Defrag and Scandisk",
  },
  {
    "text": "Create Restore Point",
  },
  {
    "text": "Print Typed copy",
  },
  {
    "text": "Save electronic copy to the client folder (K-drive) use format ClientName_ServiceTag#_Date",
  },
  {
    "text": "Put Mousepad in box",
  },
  {
    "text": "Enter Configuration in ConnectWise",
  },
  {
    "text": "Mark Box \"# / #\" if more than one computer",
  }
]

export default function Home() {
  return <div className="flex flex-col  text-sm">
    <div className="flex flex-row justify-between font-semibold gap-4 mb-4">
      <div className="flex flex-row flex-grow gap-4">
        <label className="italic">Client Name</label>
        <input className='flex-grow border-b border-black px-2' type='text' defaultValue='example client name'></input>
      </div>
      <div className="flex flex-row gap-4">
        <label className="italic">Ticket Number</label>
        <input className="w-20 border-b border-black text-center" type='text' defaultValue='00000'></input>
      </div>
    </div>

    <div>
      <div className="flex flex-col gap-0">
        {checkboxFields.map((field, index) => {
          return <div key={index} className="flex flex-row-reverse gap-2 justify-end text-sm items-center">
            {field.extraInputName ? <div className="flex flex-row flex-grow justify-end">
              <input 
              type='text'
              id={field.extraInputName} 
              placeholder='N/A'
              className="px-2 w-[25rem] leading-none outline outline-black outline-1"
              ></input>
            </div> : null}
            <label className='leading-[1.125rem]'>{field.text}</label>
            <input type='checkbox' />
          </div>
        })}
      </div>
    </div>

    <div className="flex flex-row font-semibold gap-8 justify-end text-sm">
      <div className="flex flex-row gap-4">
        <label>Date:</label>
        <input className="border-b border-black text-center" type='date'></input>
      </div>
      <div className="flex flex-row gap-4">
        <label>Consultant(s):</label>
        <input className="w-32 border-b border-black text-center" type='text' defaultValue='example name'></input>
      </div>
    </div>

    <div className="flex flex-col text-sm">
      <label>Notes:</label>
      <textarea className="w-full h-12 border border-black px-2 resize-none" />
    </div>
  </div>
}
