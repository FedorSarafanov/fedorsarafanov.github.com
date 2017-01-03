import xml.etree.cElementTree as etree

example_xml = """
<notes>
    <note>
        <to>Timmy</to>
        <from>Rich</from>
        <heading>Reminder</heading>
        <body>Remeber the concert tickets.</body>
    </note>
    <note>
        <to>Eric</to>
        <from>Josh</from>
        <heading>Ride Plans</heading>
        <body>Meet at the gas station on the corner of Diffley and 13 at 6:00pm.</body>
    </note>
</notes>
"""

notes = etree.fromstring(example_xml)

for note in notes.getchildren():
    print(note.text)
